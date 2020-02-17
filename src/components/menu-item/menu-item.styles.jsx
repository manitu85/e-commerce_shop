import styled from 'styled-components'

const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 35rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
  cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 40rem;
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .content {
    height: 10rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #eedf9d;
    color: #fff;
    background-color: #000;
    opacity: 0.75;

    position: absolute;
  

    .title {
      font-weight: bold;
      margin-bottom: 0.6rem;
      font-size: 22px;
      color: currentColor;
      letter-spacing: 2px;
    }

    .subtitle {
      font-weight: 300;
      font-size: 1.6rem;
    }
  }
`

export default MenuItemContainer