class AuthorsController < ApiController
  # GET /authors
  def index
    @authors = Author.select("id, name").all

    render json: @authors.to_json
  end

  # GET /authors/1
  def show
    @author = Author.find(params[:id])
    render json: @author.to_json(:include => { :books => { :only => [:id, :title, :authorname, :description, :stars, :comment] }})
  end
end
