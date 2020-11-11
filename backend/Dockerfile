FROM golang:1.12.9

WORKDIR /go/src/app
COPY ./main.go ./main.go

RUN go get -d -v ./...
RUN go install -v ./...

EXPOSE 3000
CMD ["app"]