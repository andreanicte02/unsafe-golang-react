package main

import (
	"context"
	"github.com/gorilla/mux" //para levantar el router
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"time"
)
var client, err = mongo.NewClient(options.Client().ApplyURI("<conecct mongo-atlas>"))

type StructEmail struct {
	email string `json:"email,omitempty"`
}

func handler(w http.ResponseWriter, r *http.Request) {

	data, err := ioutil.ReadAll(r.Body)
	if err != nil{
		http.Error(w, err.Error(), 500)
		return
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	collection := client.Database("sopes2").Collection("data")

	collection.InsertOne(ctx, bson.D{
		{Key: "email", Value: strings.Replace(string(data),"email=",":",1)},
	})

	log.Println(string(data))
	log.Println(r.URL.Fragment)
	

}


func main() {

	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)


	if err != nil {

		log.Fatal(err)

	}

	//---------------------------
	router := mux.NewRouter()
	router.HandleFunc("/",handler).Methods("POST")
	http.ListenAndServe(":3000", router)

}