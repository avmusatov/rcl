import { multiselectOptions } from '../data';
import MultiSelect from './multiselect';
import Popper from './popper';
import {
    Container,
    FlexContainer,
    H1,
    H2,
    ItemComponent,
    ItemContainer,
    ItemDescription,
    ItemInfo,
    ItemName,
    PageHeader,
    PopperContent,
    Toggler,
} from './styledComponents';

interface ComponetItemProps {
    name: string;
    description?: string;
    children: React.ReactChild;
}

const ComponentItem = ({ name, description, children }: ComponetItemProps) => {
    return (
        <ItemContainer>
            <ItemInfo>
                <ItemName>{name}</ItemName>
                <ItemDescription>{description}</ItemDescription>
            </ItemInfo>
            <ItemComponent>{children}</ItemComponent>
        </ItemContainer>
    );
};

const Content = () => {
    return (
        <Container>
            <PageHeader>
                <H1>REACT COMPONENTS LIBRARY</H1>
                <H2>Several examples of independent React components</H2>
            </PageHeader>
            <FlexContainer>
                <ComponentItem
                    name="Multiselect"
                    description="Multiselect - convenient selection and dynamic addition of new items for the select."
                >
                    <MultiSelect options={multiselectOptions} />
                </ComponentItem>
                <ComponentItem
                    name="Popper"
                    description="A Popper can be used to display some content on top of another."
                >
                    <Popper
                        toggler={<Toggler>Toggle popper</Toggler>}
                        placement="bottom"
                        flipWhenOverflow
                        offset={[0, 10]}
                    >
                        <PopperContent>Click me, I will stay visible until you click outside.</PopperContent>
                    </Popper>
                </ComponentItem>
            </FlexContainer>
        </Container>
    );
};

export default Content;
