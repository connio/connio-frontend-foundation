import styled from 'styled-components'
export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > .top {
  }

  & > .middle {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    & > .left-sider {
      display:flex
    }
    & > .app-body {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      & > .left-nav {
      }
      & > .content-body {
        flex-grow: 1;
      }
      & > .right-nav {
        justify-self: flex-end;
      }
    }
    & > .right-sider {
      justify-self: flex-end;
    }
  }

  & > .bottom {
    justify-self: flex-end;
  }
`
