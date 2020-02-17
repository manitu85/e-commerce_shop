import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 70px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 2rem;
  cursor: pointer;
`

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   font-size: 2rem;
//   cursor: pointer;
// `

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `