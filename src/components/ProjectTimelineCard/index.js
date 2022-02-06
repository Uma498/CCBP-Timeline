import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectTimelineCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <ProjectTimelineCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectTimelineCardContainer>
  )
}

export default ProjectTimelineCard
