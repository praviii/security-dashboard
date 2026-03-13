package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/praveen/security-dashboard-api/service"
)

type AuthHandler struct {
	AuthSvc *service.AuthService
}

func NewAuthHandler(authSvc *service.AuthService) *AuthHandler {
	return &AuthHandler{
		AuthSvc: authSvc,
	}
}

func (h *AuthHandler) Login(c *gin.Context) {

	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	token, err := h.AuthSvc.Login(body.Email, body.Password)

	if err != nil {
		c.JSON(401, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"token": token,
	})
}
