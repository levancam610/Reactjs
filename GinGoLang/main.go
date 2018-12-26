package main

import (
	"./controllers"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	client := r.Group("/api")
	{
		client.POST("/clothes/create", controllers.Create)
		client.GET("/clothes", controllers.GetList)
		client.POST("/form_post", func(c *gin.Context) {
			if(c.Request.Method=="POST"){
				message := c.PostForm("message")
				nick := c.DefaultPostForm("nick", "anonymous")
				c.JSON(200, gin.H{
					"status":  "posted",
					"message": message,
					"nick":    nick,
				})
			}

		})
	}

	return r
}

func main() {
	r := setupRouter()
	r.Run(":8000") // Ứng dụng chạy tại cổng 8080
}