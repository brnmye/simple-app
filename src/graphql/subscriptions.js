// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
  }
}
`;
export const onCreatePerson = `subscription OnCreatePerson {
  onCreatePerson {
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
export const onUpdatePerson = `subscription OnUpdatePerson {
  onUpdatePerson {
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
export const onDeletePerson = `subscription OnDeletePerson {
  onDeletePerson {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
