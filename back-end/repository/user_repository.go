package repository

import (
	"errors"

	u "github.com/praveen/security-dashboard-api/model"
)

type Repository struct {
	repo []u.User
}

func NewReposiroty() *Repository {
	return &Repository{}
}

func (r *Repository) Create(data u.User) u.User {
	data.Id = len(r.repo) + 1
	r.repo = append(r.repo, data)
	return data
}

func (r *Repository) GetUser(id int) (u.User, error) {
	for _, value := range r.repo {
		if value.Id == id {
			return value, nil
		}
	}
	return u.User{}, errors.New("Notfound user")
}

func (r *Repository) GetUserByMail(email string) (u.User, error) {
	for _, value := range r.repo {
		if value.Email == email {
			return value, nil
		}
	}
	return u.User{}, errors.New("Notfound user")
}
