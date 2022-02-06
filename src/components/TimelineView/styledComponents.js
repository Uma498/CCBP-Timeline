import styled from 'styled-components/macro'

export const TimelineViewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1100px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`
export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  line-height: 2.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
