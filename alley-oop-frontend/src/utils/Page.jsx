import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
    <>
        <Helmet>
            <title>{`${title} | Alley-Oop`}</title>
            {meta}
        </Helmet>

        <Box sx={{ height: '100%' }} ref={ref} {...other} >
            {children}
        </Box>
    </>
));

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
};

export default Page;
