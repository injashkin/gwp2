# Добавление ссылок и кнопок

В этом руководстве будет показано, как добавить ссылку в виде кнопки в блок Promo.

В админпанели Wordpress откройте _Группы полей_ -> _Homepage_ -> _Promo_, в секции _Поля_ нажмите кнопку _Add Field_ и в _Тип поля_ выберите _Ссылка_, в поле _Ярлык поля_ впишите _Link_, в _Имя поля_ - _link_, _Возвращаемое значение_ установите _URL ссылки_. Затем в правом верхнем углу нажмите кнопку _Save Changes_.

Откройте _Страницы_ -> _Homepage_. В блоке _Promo_, в поле _Link_ нажмите кнопку _Выберите ссылку_ и выберите нужную ссылку из списка. Затем в правом верхнем углу нажмите кнопку _Обновить_.

Измените файл gatsby-node.js:

```js
// В разделе blocks для HomepagePromo добавьте строку links: [HomepageLink] @link

// blocks
actions.createTypes(/* GraphQL */ `
  ...

    type HomepagePromo implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      links: [HomepageLink] @link
    }
  `)

// В объекте blocks в свойство promo добавьте свойство links

const blocks = {
  promo: {
    id: createNodeId(`${node.id} >>> HomepagePromo`),
    ...promo,
    links: [promo.link].filter(Boolean).map(createLinkNode(node.id)),
  },
}
```

Изменим файл /crs/components/promo.tsx:

```tsx
// Импортируем HomepageLink и ButtonList
import {
  Box,
  ButtonList, // <-
  Container,
  Heading,
  HomepageLink, // <-
  Section,
  Text,
} from "./ui"

// В интерфейс добавляем 
// links?: HomepageLink[]
export interface PromoProps {
  heading?: string
  text?: string
  links?: HomepageLink[] // <-
}

// В компонент Promo добавляем строку
// <ButtonList links={props.links}></ButtonList>

export default function Promo(props: PromoProps) {
  return (
    <Section>
      <Container>
        <Box border padding={4}>
          <Heading>{props.heading}</Heading>
          <Text>{props.text}</Text>
          <ButtonList links={props.links}></ButtonList>
        </Box>
      </Container>
    </Section>
  )
}

// В схему добавляем
// links {
//   href
//   text
// }

export const query = graphql`
  fragment HomepagePromoContent on HomepagePromo {
    id
    heading
    text
    links {
      href
      text
    }
  }
`
```
