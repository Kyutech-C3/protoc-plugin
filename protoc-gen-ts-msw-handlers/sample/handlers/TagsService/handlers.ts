/* eslint-disable */
/* This file is generated by protoc-gen-ts-msw-handlers */
/* Do not edit this file manually */
import { http, HttpResponse } from 'msw'
const V1TagsGetHandler = http.get('/v1/tags',() => {
  return HttpResponse.json({
    tags:[
    {
    id:'d10db55b-aa9a-470f-b56d-c6e913a2d73f',
    name:'Roger Dooley',
    color:'#66E667',
    },
    {
    id:'09e00903-ec91-46ee-ae90-7cebc4f28add',
    name:'Roger Dooley',
    color:'#66E667',
    },
    {
    id:'5149d8bb-c3e9-4f06-af86-7d2624ed6788',
    name:'Roger Dooley',
    color:'#66E667',
    },
    ],
  })
})
export const tagsServiceHandlers = [
  V1TagsGetHandler,
]
