import styled from 'styled-components'
export const Page = styled.div`
  padding: 32px;
  .page-title {
    border: 1px solid black;
  }
  .breadcrumb {
    .MuiIcon-root {
      margin-right: 6px;
    }
  }
`
export const Breadcrumb = styled.ul`
  display: flex;
  padding: 0px;
  align-items: center;
`

export const BreadcrumbItem = styled.li`
  padding: 0px;
  list-style-type: none;
  &:not(:last-child) {
    &::after {
      content: '/';
      padding: 0px 20px;
    }
  }
  &:not(:first-child) {
  }
`
