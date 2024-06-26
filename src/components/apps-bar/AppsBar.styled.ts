import { blueGrey } from '@mui/material/colors'
import styled from 'styled-components'
export const Styled = styled.div`
  padding: 8px 4px;
  background-color: ${blueGrey[900]};
  color: ${blueGrey[50]};
  flex-grow: 1;
  box-shadow: inset 3px 0px 5px -1px rgba(0, 0, 0, 0.5), 3px 0px 5px -1px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  .logo-area {
    display: flex;
    justify-content: space-between;
    padding-left: 14px;
    flex-direction: row;
    .logo{
      padding-top:3px;
      padding-left:4px;
      margin-bottom:-3px;
    }
    .collapse-icon {
      align-self: flex-end;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    &.main-buttons {
      flex-grow: 1;
    }
    .version{
      text-align: center;
    }
  }
`
