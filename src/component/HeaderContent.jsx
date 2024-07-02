import React from 'react'
import Headings from './heading/Heading'
import Button from './buttons/Button'

export const HeaderContent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div> <div className="absolute bottom-10">
      <div className="mx-5 md:mx-20">
        <div class="uppercase font-semibold  text-xs inline-block tracking-wider ">
          <Headings heading={'h6'}>WELCOME TO TLT ACADEMY</Headings>

        </div>
        <Headings heading={'h1'} style={'tracking-wider'}>
          Best <br /> <span className="text-primary">Education</span> Expertise
        </Headings>
        <p className=' tracking-wider py-3'>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts.</p>
        <div className="flex gap-4 py-3">
          <Button onClick={handleClick} color="red"> get startd now </Button>    <Button onClick={handleClick} color="white"> view course </Button>
        </div>
      </div>
    </div></div>
  )
}
