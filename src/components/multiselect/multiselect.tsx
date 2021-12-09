import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { Option } from './option';
import Icon from '../shared/icon';
import {
    Container,
    Menu,
    SelectControl,
    SelectedOptionsList,
    SelectedOptionContainer,
    SelectedOption,
    DeleteButton,
    ControlIcons,
    DefaultLabel,
    StyledInput,
} from './styledComponents';

export interface IOption {
    label: string;
    value: string;
}

export interface IOrderedOption extends IOption {
    order: number;
}

interface Props {
    options: IOption[];
}

const addOrderToOptions = (options: IOption[]): IOrderedOption[] => {
    return options.map((o, idx) => ({ ...o, order: idx }));
};

const insertOptionByOrder = (option: IOrderedOption, options: IOrderedOption[]): IOrderedOption[] => {
    const idx = options.findIndex((o) => o.order > option.order);

    if (idx > -1) {
        return [...options.slice(0, idx), option, ...options.slice(idx)];
    }
    return [...options, option];
};

const removeOptionByIndex = (idx: number, options: IOrderedOption[]): IOrderedOption[] => {
    return [...options.slice(0, idx), ...options.slice(idx + 1)];
};

export const MultiSelect: FC<Props> = ({ options }) => {
    const [optionsInMenu, updateOptionsInMenu] = useState<IOrderedOption[]>(addOrderToOptions(options));
    const [selectedOptions, updateSelectedOptions] = useState<IOrderedOption[]>([]);
    const [menuIsOpen, toggleMenu] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [focused, setFocused] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addNewOptionByEnterPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && searchQuery) {
                console.log('It works');
                const newOption: IOrderedOption = {
                    label: searchQuery,
                    value: searchQuery,
                    order: 0,
                };
                updateSelectedOptions([...selectedOptions, newOption]);
                setSearchQuery('');
            }
        };

        document.addEventListener('keydown', addNewOptionByEnterPress);

        return () => void document.removeEventListener('keydown', addNewOptionByEnterPress);
    }, [searchQuery, selectedOptions]);

    useEffect(() => {
        const checkIfClickedOutside = (event: Event) => {
            const target = event.target as Node;

            if (menuIsOpen && ref.current && !ref.current.contains(target)) {
                toggleMenu(false);
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [menuIsOpen]);

    const addSelectedOption = useCallback(
        (value: string) => {
            const idx = optionsInMenu.findIndex((o) => o.value === value);
            const option = optionsInMenu[idx];

            updateOptionsInMenu(removeOptionByIndex(idx, optionsInMenu));
            updateSelectedOptions([...selectedOptions, option]);
            toggleMenu(false);
            setSearchQuery('');
        },
        [optionsInMenu, selectedOptions]
    );

    const deleteSelectedOption = useCallback(
        (value: string) => {
            const idx = selectedOptions.findIndex((o) => o.value === value);
            const option = selectedOptions[idx];

            updateOptionsInMenu(insertOptionByOrder(option, optionsInMenu));
            updateSelectedOptions(removeOptionByIndex(idx, selectedOptions));
        },
        [optionsInMenu, selectedOptions]
    );

    const deleteAllSelectedOptions = useCallback(() => {
        updateSelectedOptions([]);
        updateOptionsInMenu(addOrderToOptions(options));
    }, [options]);

    const renderSelectedOptions = useCallback(
        (options: IOrderedOption[]): JSX.Element => {
            return (
                <SelectedOptionsList>
                    {options.map(({ value, label }) => {
                        return (
                            <SelectedOptionContainer key={value}>
                                <SelectedOption>{label}</SelectedOption>
                                <DeleteButton>
                                    <Icon type="x" action={() => deleteSelectedOption(value)} inline={true} />
                                </DeleteButton>
                            </SelectedOptionContainer>
                        );
                    })}
                </SelectedOptionsList>
            );
        },
        [deleteSelectedOption]
    );

    const renderMenu = useCallback(
        (options: IOrderedOption[]): React.ReactChild => {
            const filteredOptions = options.filter(({ label }) => label.includes(searchQuery));
            return (
                <Menu>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(({ value, label }) => {
                            return (
                                <Option addSelectedOption={addSelectedOption} key={value} value={value} label={label} />
                            );
                        })
                    ) : (
                        <div
                            style={{
                                width: 'max-content',
                                margin: '0 auto',
                            }}
                        >
                            <DefaultLabel>No options</DefaultLabel>
                        </div>
                    )}
                </Menu>
            );
        },
        [searchQuery, addSelectedOption]
    );

    const onFocused = () => {
        toggleMenu(true);
        setFocused(true);
    };

    const defaultLabel =
        selectedOptions.length === 0 && searchQuery === '' ? <DefaultLabel>Select...</DefaultLabel> : null;

    const deleteAllButton = selectedOptions.length > 0 ? <Icon type="x" action={deleteAllSelectedOptions} /> : null;

    const menu = menuIsOpen ? renderMenu(optionsInMenu) : null;

    return (
        <Container ref={ref}>
            <SelectControl focused={focused}>
                {defaultLabel}
                {renderSelectedOptions(selectedOptions)}
                <StyledInput
                    value={searchQuery}
                    onFocus={onFocused}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <ControlIcons>
                    {deleteAllButton}
                    <Icon type="chevron-down" action={() => toggleMenu(!menuIsOpen)} />
                </ControlIcons>
            </SelectControl>
            {menu}
        </Container>
    );
};
