package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/praveen/security-dashboard-api/handler"
)

func RegisterUserRoutes(r *gin.Engine, handler *handler.UserHandler) {
	userRoutes := r.Group("/users")
	userRoutes.GET("/:id", handler.GetUser)
	userRoutes.POST("/", handler.CreateUser)
}
