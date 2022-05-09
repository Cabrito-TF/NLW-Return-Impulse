import React, { useState } from 'react'
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG:{
    title:'Problema',
    image:{
      source:bugImageUrl,
      alt:'inseto'
    }
  },
  IDEA:{
    title:'Ideia',
    image:{
      source:ideaImageUrl,
      alt:'lâmpada'
    }
  },
  OTHER:{
    title:'outros',
    image:{
      source:thoughtImageUrl,
      alt:'nuvem'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  

  function handleRestartFeeback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      
      {feedbackSent ? 
      (
      <FeedbackSuccessStep 
      onFeedbackRestartRequested={handleRestartFeeback}
      />
      ) : (
        <>
        {!feedbackType ?
          (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ):(
          <FeedbackContentStep
          onFeedbackSent={() =>setFeedbackSent(true)}
          onFeedbackRestartRequested={handleRestartFeeback}
          feedbackType={feedbackType}/>
          )}
        </>
      )}
      <footer className='text-xs text-neutral-400'>
        Feito com ❤ pelo <a className='underline underline-offset-2' href="#">Caio</a> 
      </footer>
    </div>
  )
}
