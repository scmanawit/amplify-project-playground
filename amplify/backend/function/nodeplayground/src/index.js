
exports.handler = async (event) => {
  const { httpMethod, body } = event;
  switch (httpMethod) {
    case 'create':
      return create(body);
    case 'read':
      return read(body.id);
    case 'update':
      return update(body);
    case 'delete':
      return destroy(body.id);
  }
};

const create = async (body) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    const json = await response.json();
    return {
      status: response.status,
      data: json
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const read = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Failed to read post');
    }
    const json = await response.json();
    return {
      status: response.status,
      data: json
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const update = async (body) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    const json = await response.json();
    return {
      status: response.status,
      data: json
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// exports.handler = async event => {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json());
// };