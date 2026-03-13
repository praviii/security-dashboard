package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/praveen/security-dashboard-api/handler"
	"github.com/praveen/security-dashboard-api/repository"
	"github.com/praveen/security-dashboard-api/routes"
	"github.com/praveen/security-dashboard-api/service"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	userRepo := repository.NewReposiroty()
	userSvc := service.NewService(userRepo)
	userHandler := handler.NewUserHandler(userSvc)
	authSvc := service.NewAuthService(userSvc)
	authHandler := handler.NewAuthHandler(authSvc)

	auth := r.Group("/")
	auth.POST("login", authHandler.Login)
	routes.RegisterUserRoutes(r, userHandler)
	r.Run()
}
