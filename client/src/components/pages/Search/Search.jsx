import './Search.css';
import { Select, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

export default function Search() {
    return (
        <div>
            <h1>Search Exercise</h1>
            <Select placeholder='Select a Body Part' className='w-50' >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon />}
            />
        </div>
    )
}