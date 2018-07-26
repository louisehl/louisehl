import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Image, Item } from 'semantic-ui-react'

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

  getStars(num) {
    for (var i = 0; i < 10; i++) {
      if (i < num) {
        <Icon name='star' size='tiny'/>
      } else {
        <Icon name='star outline' size='tiny'/>
      }
    }
  }

  render () {
    let {authors, author} = this.state
    return authors
      ? <Container text>
        <Header as ='h1' icon textAlign='center' color='teal'>
          <Icon name ='hand spock' circular />
          <Header.Content>
            LouiseHL
            <Header.Subheader style={{color:'#b1c5c5'}}>Hessellund Lastein</Header.Subheader>
          </Header.Content>
        </Header>
        <Container textAlign='center' style={{color: 'gray'}}>
          Books I have read and will read soonish listed by author
        </Container>
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
            <Header as='h2' textAlign='center'>
              <Image src={author.image} circular /> {author.name}
            </Header>
            {author.description && <p>{author.description}</p>}
            <Item.Group>
              {author.books.map((book, i) =>
                <Item key={i}>
                  <Item.Content>
                    <Divider horizontal section>Books</Divider>
                    <Item.Header color='olive'>{book.title}</Item.Header>
                    <Item.Meta>
                      written by {book.authorname}
                    </Item.Meta>
                    <Item.Description>
                      <Header as='h5'>Description:</Header>
                      {book.description}
                    </Item.Description>
                    <Item.Meta>
                      <Header as='h5'>My score:</Header>
                      {book.stars} / 10
                    </Item.Meta>
                    <Item.Extra>
                      <Header as='h5'>Comments:</Header>
                      {book.comment}
                    </Item.Extra>
                    <Divider section/>
                  </Item.Content>
                </Item>
              )}
            </Item.Group>
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
