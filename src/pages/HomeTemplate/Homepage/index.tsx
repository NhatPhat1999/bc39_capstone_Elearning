import React from 'react'
import Banner from './Banner';
import ListCourse from './ListCourse'
import ListTeacher from './ListTeacher';
import Comment from './comment';

export default function Homepage() {
  return (
    <div>
      <Banner/>
      <ListCourse />
      <ListTeacher />
      <Comment />
    </div>
  )
}
