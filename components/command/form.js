import { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import {
  Box,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const ResultItem = ({ id, title, href, external, url }) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box p="3">
      <Box
        bg={bg}
        _hover={{ shadow: "sm" }}
        p="2"
        borderWidth="1px"
        borderRadius="5px"
      >
        <NextLink href={url} passHref>
          <Link isExternal={external} _hover={{ textDecoration: "none" }}>
            <HStack>
              <Image src={href} boxSize="20px" mr="2" />
              <Text>{title}</Text>
              {external && <Icon as={HiOutlineExternalLink} />}
            </HStack>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

const Form = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "What do you need?",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "offers-next-api",
            getItems: ({ query }) => {
              if (!!query) {
                return fetch(`/api/search?q=${query}`).then((res) =>
                  res.json()
                );
              }
            },
          },
        ],
        ...props,
      }),
    [props]
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <form ref={formRef} {...formProps}>
      <InputGroup>
        <Input
          variant="filled"
          borderBottomWidth="1px"
          size="lg"
          ref={inputRef}
          placeholder="Basic usage"
          {...inputProps}
        />
      </InputGroup>
      {autocompleteState.isOpen && (
        <div ref={panelRef} {...autocomplete.getPanelProps()}>
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection;
            return (
              <section key={`section-${index}`}>
                {items.length > 0 && (
                  <ul {...autocomplete.getListProps()}>
                    {items.map((item) => (
                      <ResultItem key={item.id} {...item} />
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      )}
    </form>
  );
};

export default Form;
