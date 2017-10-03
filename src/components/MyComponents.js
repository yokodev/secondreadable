import React from 'react'
import {Breadcrumb } from 'semantic-ui-react'

export const myBreadCrumb = ({locations,...props}) => {
  console.log(`locaitons: `,locations);
  console.log(`props `,props);
return <Breadcrumb>
    {locations.map(loc =>
      <div>
        <Breadcrumb.Section>{loc}</Breadcrumb.Section>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
      </div>
    )}
  </Breadcrumb>
}
