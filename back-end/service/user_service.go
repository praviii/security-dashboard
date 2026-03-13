package service

import (
	"log"

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
	log.Println("INFO: User created successfully", user)
	return s.repo.Create(user)
}

func (s *UserService) GetUser(id int) (u.User, error) {
	user, err := s.repo.GetUser(id)

	if err != nil {
		log.Println("ERROR: User not found with this Id : ", id)
	}
	log.Println("INFO: User found with this ID: ", id)
	return user, err
}

func (s *UserService) GetUserByEmail(email string) (u.User, error) {
	user, err := s.repo.GetUserByMail(email)

	if err != nil {
		log.Println("ERROR: User not found with this mail : ", email)
	}
	log.Println("INFO: User found with this ID: ", email)
	return user, err
}
