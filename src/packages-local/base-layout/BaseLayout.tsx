import React, { PropsWithChildren } from 'react'
import { Styled } from './BaseLayout.styled'
import { BaseLayoutProps } from './types'
const BaseLayout: React.FC<PropsWithChildren<BaseLayoutProps>> = (props) => {
  return (
    <Styled>
      <div className="top">{props.top}</div>
      <div className="middle">
        <div className="left-sider">{props.leftSider}</div>
        <div className="app-container">
          <div className="header">{props.header}</div>
          <div className="app-body">
            <div className="left-nav">{props.leftNav}</div>
            <div className="content-body">{props.children}</div>
            <div className="right-nav">{props.rightNav}</div>
          </div>
          <div className="footer">{props.footer}</div>
        </div>
        <div className="right-sider">{props.rightSider}</div>
      </div>
      <div className="bottom">{props.bottom}</div>
    </Styled>
  )
}

export default BaseLayout
