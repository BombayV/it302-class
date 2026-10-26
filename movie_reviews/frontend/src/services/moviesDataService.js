class MovieDataService {

  getAll(page = 0) {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies?page=${page}`)
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  get(id) {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies/id/${id}`)
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  find(query, by = "title", page = 0) {
    const params = new URLSearchParams({
      [by]: query,
      page: String(page),
    });

    return fetch(
      `${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies?${params.toString()}`
    )
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  createReview(data) {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  updateReview(data) {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies/review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  deleteReview(id, userId) {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies/review`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ review_id: id, user_id: userId })
    })
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
  }

  getRatings() {
    return fetch(`${import.meta.env.PUBLIC_REACT_APP_BACKEND_URL}/api/v1/movies/ratings`)
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });

  }
}

export default new MovieDataService();