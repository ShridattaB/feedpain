import { styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FeedbackCard from '../Card/FeedbackCard/FeedbackCard';


const FeedbackCardDivstyled = styled('div')(({ theme }) => ({
  width: "46%",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    paddingInline: "14px"
  }
}))

export default function Carousel({ carouselItems = [] }) {

  const [carouselItemsOrder, setCarouselItemsOrder] = useState(carouselItems.map((v, i) => i));
  const [activeData, setActiveData] = useState(carouselItems[0])

  let timeInterval;
  useEffect(() => {
    timeInterval = setInterval(async () => {
      if (timeInterval)
        clearInterval(timeInterval)
      await customInterval();
    }, [20000])
  }, [])

  const customInterval = async () => {
    return new Promise((resolve) => resolve(
      setTimeout(() => shiftNext(), [20000])
    ))
  }


  const shiftNext = () => {
    const temp = carouselItemsOrder;
    const last = temp.pop();
    temp.splice(0, 0, last)
    setCarouselItemsOrder(temp)
    setActiveData(carouselItems[temp[0]])
  }

  return (
    <FeedbackCardDivstyled className='carousel'>
      <FeedbackCard data={activeData} />
    </FeedbackCardDivstyled>
  )
}
