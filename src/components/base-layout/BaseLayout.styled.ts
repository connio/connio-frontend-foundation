import styled from 'styled-components'
export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > .top {
  }

  & > .middle {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    & > .left-sider {
      display: flex;
    }
    & > .app-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      & > .header {
      }
      & > .app-body {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        & > .left-nav {
          display: flex;
        }
        & > .content-body {
          display: flex;

          flex-grow: 1;
        }
        & > .right-nav {
          justify-self: flex-end;
          display: flex;
        }
      }
      & > .footer {
        justify-self: flex-end;
        display: flex;
      }
    }

    & > .right-sider {
      justify-self: flex-end;
      display: flex;
    }
  }

  & > .bottom {
    display: flex;

    justify-self: flex-end;
  }
`
