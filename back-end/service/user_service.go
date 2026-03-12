package service

import (
	u "github.com/praveen/security-dashboard-api/model"
	r "github.com/praveen/security-dashboard-api/repository"
)

type UserService struct {
	repo *r.Repository
}

func NewService(repo *r.Repository) *UserService {
	return &UserService{
		repo: repo,
	}
}

func (s *UserService) CreateUser(user u.User) u.User {
	return s.repo.Create(user)
}

func (s *UserService) GetUser(id int) (u.User, error) {
	return s.repo.GetUser(id)
}
