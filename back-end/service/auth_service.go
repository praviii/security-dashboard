package service

import (
	"errors"
	"fmt"

	"github.com/praveen/security-dashboard-api/utils"
)

type AuthService struct {
	userSvc *UserService
}

func NewAuthService(u *UserService) *AuthService {
	return &AuthService{
		userSvc: u,
	}
}

func (a *AuthService) Login(email, password string) (string, error) {
	user, err := a.userSvc.GetUserByEmail(email)

	if err != nil {
		fmt.Println("User not found")
		return "", errors.New("User not found")
	}

	if user.Password != password {
		fmt.Println("Password is incrorrect")
		return "", errors.New("Entered password is incorrect")
	}

	token, err := utils.GenerateToken(user.Id)

	if err != nil {
		return "", err
	}

	return token, nil
}
