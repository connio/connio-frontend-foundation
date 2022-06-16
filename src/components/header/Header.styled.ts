import { blue } from '@mui/material/colors'
import styled from 'styled-components'
export const Styled = styled.div`
  & > .header-colorbar {
    background-color: ${blue[600]};
    color: white;
    padding: 16px;
    height: 32px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: inset 3px 0px 5px -1px rgba(0, 0, 0, 0.5), 3px 0px 5px -1px rgba(0, 0, 0, 0.5);
    .right-controls {
      
    }
    .left-controls {
      display: flex;
      flex-direction: row;
    }
  }
`
