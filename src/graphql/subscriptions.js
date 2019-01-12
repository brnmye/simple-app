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
    id
    name
    age
    posts {
      items {
        id
        title
        content
        created_at
      }
      nextToken
    }
  }
}
`;
export const onUpdatePerson = `subscription OnUpdatePerson {
  onUpdatePerson {
    id
    name
    age
    posts {
      items {
        id
        title
        content
        created_at
      }
      nextToken
    }
  }
}
`;
export const onDeletePerson = `subscription OnDeletePerson {
  onDeletePerson {
    id
    name
    age
    posts {
      items {
        id
        title
        content
        created_at
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    content
    created_at
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    content
    created_at
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    content
    created_at
  }
}
`;
