import { blue, blueGrey } from '@mui/material/colors'
import styled from 'styled-components'
export const Styled = styled.div`
  background-color: ${blueGrey[800]};
  color: ${blueGrey[50]};
  box-shadow: inset 3px 0px 5px -1px rgba(0, 0, 0, 0.5),
    3px 0px 5px -1px rgba(0, 0, 0, 0.5);
  padding: 16px 5px;
  box-sizing: border-box;
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 10px;
  max-width: 400px;
  z-index: 2;
  position: relative;
  &.collapsed-left-nav {
    transition: width 0.2s ease-out;
    transition-delay: 300ms;
    position: absolute;
    width: 15px !important;
  }
  &.collapsed-left-nav:hover {
    position: absolute;
    width: 250px !important;
    transition-delay: 1000ms;
  }
  .app-sidebar-content {
    display: flex;
    width: 100%;
    overflow: hidden;
    & > .overflow-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 200px;
    }
  }
  .app-sidebar-toggle {
    position: absolute;
    top: 10px;
    right: -10px;
    cursor: pointer;
    z-index: 2;
    button {
      min-width: 16px;
      min-height: 16px;
      width: 20px;
      height: 20px;
      font-size: 0.1rem;
      span {
        font-size: 1.2rem;
      }
    }
  }
  .app-sidebar-resizer {
    cursor: col-resize;
    resize: horizontal;
    position: absolute;
    right: 0px;
    height: 100%;
    width: 1px;
    background-color: ${blueGrey[800]};
  }

  .app-sidebar-resizer:hover {
    width: 2px;
    background: ${blue[500]};
  }
  .logo-area {
    display: flex;
    justify-content: space-between;
    padding-left: 14px;
    flex-direction: row;
    .logo {
      padding-top: 3px;
      padding-left: 4px;
      margin-bottom: -3px;
    }
    .collapse-icon {
      align-self: flex-end;
    }
  }
  .apps-bar-btn {
    width: 50px;
    height: 50px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    &.main-buttons {
      flex-grow: 1;
    }
  }
`
