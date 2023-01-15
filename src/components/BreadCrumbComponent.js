import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function BreadCrumbComponent({crumbs}) {
    const currentPath = window.location.pathname;
    return (
        <Breadcrumb>
        {
            crumbs && crumbs.map((crumb, index) => {
                return (
                    <Breadcrumb.Item key={index} active={crumb.path === currentPath}>
                    {crumb.path !== currentPath ?
                        <Link to={ crumb.path} > {crumb.Name} </Link>
                        :
                        crumb.Name
                    }
                        </Breadcrumb.Item>
                )
            })
        }
        </Breadcrumb>
    )
}

export default BreadCrumbComponent;
