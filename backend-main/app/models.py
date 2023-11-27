from .database import Base 
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class Story(Base):
    __tablename__='stories'
    id=Column(Integer,primary_key=True,index=True)
    title=Column(String)
    body=Column(String)
    username=Column(Integer,ForeignKey('users.id'))

    creator = relationship("User",back_populates="blogs") 
class User(Base):
    __tablename__='users'
    id=Column(Integer,primary_key=True,index=True)
    name=Column(String)
    username=Column(String)
    email=Column(String)
    password=Column(String) 

    blogs=relationship("Story",back_populates="creator")