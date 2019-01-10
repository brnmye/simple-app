// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const createPerson = `mutation CreatePerson($input: CreatePersonInput!) {
  createPerson(input: $input) {
    name
    age
    posts {
      title
      content
      author {
        name
        age
      }
    }
  }
}
`;
export const updatePerson = `mutation UpdatePerson($input: UpdatePersonInput!) {
  updatePerson(input: $input) {
    name
    age
    posts {
      title
      content
      author {
        name
        age
      }
    }
  }
}
`;
export const deletePerson = `mutation DeletePerson($input: DeletePersonInput!) {
  deletePerson(input: $input) {
    name
    age
    posts {
      title
      content
      author {
        name
        age
      }
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    title
    content
    author {
      name
      age
      posts {
        title
        content
      }
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    title
    content
    author {
      name
      age
      posts {
        title
        content
      }
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    title
    content
    author {
      name
      age
      posts {
        title
        content
      }
    }
  }
}
`;
