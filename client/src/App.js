import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getAuthors = this.getAuthors.bind(this)
    this.getAuthor = this.getAuthor.bind(this)
  }

  componentDidMount () {
    this.getAuthors()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getAuthors() {
    this.fetch('api/authors')
      .then(authors => {
        if (authors.length) {
          this.setState({authors: authors})
          this.getAuthor(authors[0].id)
        } else {
          this.setState({authors: []})
        }
      })

  }

  getAuthor (id) {
    this.fetch(`/api/authors/${id}`)
      .then(author => this.setState({author: author}))
  }

  render () {
    let {authors, author} = this.state
    return authors
      ? <Container text>
        <Header as ='h2' icon textAlign='center' color='teal'>
          <Icon name ='unordered list' circular />
          <Header.Content>
            Books I have read and will read soon
          </Header.Content>
        </Header>
        <Divider hidden section />
        {authors && authors.length
          ? <Button.Group color='teal' fluid widths={authors.length}>
            {Object.keys(authors).map((key) => {
              return <Button active={author && author.id === authors[key].id}
              fluid key={key} onClick={() => this.getAuthor(authors[key].id)}>
                {authors[key].name}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No Authors found.</Container>
        }
        <Divider section />
        {author &&
          <Container>
            <Header as='h2'>{author.name}</Header>
            <img src={author.image} alt="Photo of author"/>
            {author.description && <p>{author.description}</p>}
            {author.books &&
              <Segment.Group>
                {author.books.map((book, i) => <Segment key={i}>{book.title}</Segment>)}
              </Segment.Group>
            }

          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loader indhold' />
        </Dimmer>
      </Container>
  }
}

export default App
