import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom'

const options = [
    {
        id: 1,
        name: 'Add',
        url: '/addnews'
    },
    {
        id: 2,
        name: 'View All',
        url: '/viewall'
    },
    {
        id: 3,
        name: 'Logout',
        url: '/logout'
    },
]

const ITEM_HEIGHT = 48;

const LongMenu = () => {

    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem onClick={() => { history.replace(option.url) }} key={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export { LongMenu }

