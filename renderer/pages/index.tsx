import { Flex } from '@chakra-ui/react'

import Editor from '@/components/Editor'
import Preview from '@/components/Preview'

const IndexPage = () => {
    return (
        <Flex>
            <Editor />
            <Preview />
        </Flex>
    )
}

export default IndexPage
