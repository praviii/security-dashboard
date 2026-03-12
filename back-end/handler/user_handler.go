package handler

import (
	"strconv"

	"github.com/gin-gonic/gin"
	user "github.com/praveen/security-dashboard-api/model"
	userSvc "github.com/praveen/security-dashboard-api/service"
)

type UserHandler struct {
	svc *userSvc.UserService
}

func NewUserHandler(userSvc *userSvc.UserService) *UserHandler {
	return &UserHandler{
		svc: userSvc,
	}
}

func (u *UserHandler) CreateUser(c *gin.Context) {
	var user user.User

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	newUser := u.svc.CreateUser(user)

	c.JSON(201, newUser)
}

func (u *UserHandler) GetUser(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		c.JSON(400, gin.H{"error": "Invalid ID"})
		return
	}

	userDetails, err := u.svc.GetUser(id)

	if err != nil {
		c.JSON(404, gin.H{"error": "User not found with this ID"})
		return
	}

	c.JSON(200, userDetails)
}
