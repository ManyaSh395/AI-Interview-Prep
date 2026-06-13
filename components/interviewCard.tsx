import React from 'react'
import dayjs from 'dayjs'

const interviewCard = ({interviewId, userId, role, type, techstack, createdAt} : interviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt|| Date.now()).format('MMM D, YYYY');

    return (
        <div>interviewCard</div>
    )
}

export default interviewCard
