from pydantic import BaseModel
from typing import List,Optional

class StoryBase(BaseModel):
    title:str
    story:str

class prompt(BaseModel):
    prompt:str
    person:str

class imageprompt(BaseModel):
    prompt:str
    person:str
    image:str

class image(BaseModel):
    #base64 encoded image
    image:str
    person:str    

class Story(StoryBase):
    class Config():
        orm_mode=True

    
class User(BaseModel):
    name:str
    username:str
    email:str
    password:str

class ShowUser(BaseModel):
    name:str
    username:str
    email:str
    stories:List[Story]=[]
    class Config():
        orm_mode=True
         
class ShowStory(Story):
    title:str
    body:str
    creator:ShowUser
    class Config():
        orm_mode=True         


class FollowUpRequest(BaseModel):
    session_id: int
    story_id: int
    question: str

class FollowUpResponse(BaseModel):
    response: str
    audio: str        

class Credentials(BaseModel):
    credential: str
    password: str    



class FollowUpRequest(BaseModel):
    session_id: int
    story_id: int
    question: str

class FollowUpResponse(BaseModel):
    response: str
    # audio: str

class GetTitleRequest(BaseModel):
    id: int

class GetTitleResponse(BaseModel):
    title: str

class GetStoryBodyResponse(BaseModel):
    body: str

class GetStoryBodyRequest(BaseModel):
    id: int