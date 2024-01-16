# trunk-ignore-all(black)
from fastapi import APIRouter,Depends, BackgroundTasks
from .. import schemas,models,database

from .. dao import story
from sqlalchemy.orm import Session


import base64

router=APIRouter(
    prefix='/story',
    tags=['story']
)

session_df=story.followup_question_storage()

@router.post("/generate/", response_model=dict)
def generate(request: schemas.prompt,background_tasks: BackgroundTasks,db:Session=Depends(database.get_db)):
    #generate story
    person=request.person
    if request.person is None:
        person="third"
    title,prompt, story_content = story.generate_story(request.prompt,person)

    #getting active user
    file=open("active_user.txt","r")
    user=file.read()
    file.close()

    #write to db
    new_story=models.Story(title=title,body=story_content,username=user)
    db.add(new_story)
    db.commit()
    file_name=str(new_story.id)

    #generate image
    image=story.generate_image_stability(prompt)
    with open("Story_Craft/public/assets/image/"+file_name+".png", "wb") as f:
        f.write(base64.b64decode(image))

    #generate voice
    background_tasks.add_task(story.generate_voice, story_content, file_name)

    return  {'sid': file_name,'title': title, 'story': story_content,}

@router.post("/question/", response_model=schemas.FollowUpResponse)
def get_followup(request: schemas.FollowUpRequest,db:Session=Depends(database.get_db)):
    
    print('got question')
    
    session_id = request.session_id
    story_id = request.story_id
    question = request.question
    response,t = story.get_followup_response(session_id, story_id, question,db,session_df)
    return {'response': response,}


@router.post("/image/", response_model=dict)
def generate_image(request: schemas.prompt,background_tasks: BackgroundTasks,db:Session=Depends(database.get_db)):
    #convert prompt to byte like


    decoded_bytes = base64.b64decode(request.prompt.encode("utf-8"))

    with open("temp.jpeg", "wb") as fh:
        fh.write(decoded_bytes)

    prompt=story.generate_caption("temp.jpeg")    
    #generate story
    person=request.person
    if request.person is None:
        person="third"
    title,prompt, story_content = story.generate_story(prompt,person)

    #getting active user
    file=open("active_user.txt","r")
    user=file.read()
    file.close()

    #write to db
    new_story=models.Story(title=title,body=story_content,username=user)
    db.add(new_story)
    db.commit()
    file_name=str(new_story.id)

    #generate image
    with open("Story_Craft/public/assets/image/"+file_name+".png", "wb") as f:
        f.write(base64.b64decode(decoded_bytes))

    #generate voice
    background_tasks.add_task(story.generate_voice, story_content, file_name)

    return  {'sid': file_name,'title': title, 'story': story_content,}
