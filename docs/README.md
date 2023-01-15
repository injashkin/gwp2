<a href="https://www.gatsbyjs.com">
  <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
</a>

# Gatsby Starter WordPress Homepage

Создайте домашнюю страницу с помощью Gatsby и WordPress. Это руководство демонстрирует, как использовать WordPress для создания домашней страницы, и может быть настроено в соответствии с вашим собственным визуальным брендингом.

[View the Demo](https://gatsbywordpresshomepagets.gatsbyjs.io/)

**Note:**
This version of the WordPress homepage starter is written in TypeScript. If you want to use WordPress but JavaScript is more your style, there is also a JavaScript version maintained on [GitHub](https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage).

**Примечание:**
Эта версия стартера домашней страницы WordPress написана на TypeScript. Если вы хотите использовать WordPress с JavaScript, то на [GitHub](https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage) также есть версия на JavaScript.

## Быстрый старт

Чтобы использовать этот стартер вам понадобится новый или уже существующий экземпляр WordPress. Установите в ваш WordPress следующие плагины:

- [WPGatsby][]
- [WPGraphQL][]
- [Advanced Custom Fields][]
- [WPGraphQL for Advanced Custom Fields][]

Как только эти плагины будут установлены, вам понадобится настроить URL конечной точки GraphQL. Но перед этим нужно создать Gatsby сайт и импортировать контент в WordPress. 

[wpgatsby]: https://wordpress.org/plugins/wp-gatsby/
[wpgraphql]: https://wordpress.org/plugins/wp-graphql/
[advanced custom fields]: https://wordpress.org/plugins/advanced-custom-fields/
[wpgraphql for advanced custom fields]: https://github.com/wp-graphql/wp-graphql-acf

1. **Создание Gatsby сайта**

Используйте интерфейс Gatsby CLI, чтобы начать работу локально:

   ```sh repo
   npx gatsby new my-homepage https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage-ts
   ```

Если вышеприведенным способом установить не получается, то выполните следующее:

- Скачайте архив по [этому адресу](https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage-ts/archive/refs/heads/main.zip)
- Распакуйте архив и переименуйте корневой каталог так, как вам надо
- Перейдите в каталог и с помощью контекстного меню откройте терминал
- В терминале запустите команду:

```shell
yarn
```

1. **Импортиррование контента в свой экземпляр WordPress**

   - В админпанели WordPress перейдите к _Custom Fields_ > _Tools_ (_Группы полей_ > _Инструменты_) и в форме _Import Field Groups_ (_Импорт групп полей_) выберите файл `data/acf-field-groups.json` из каталога, в который был установлен Gatsby сайт, и нажмите _Import JSON_.
   - В разделе _Pages_ (_Страницы_) создайте новую страницу под названием "Homepage".
   - Убедитесь, что Домашняя страница, импортированная в WordPress, настроена как "Homepage" вашего сайта, перейдя в _Settings_ > _Reading_ (_Настройки_ > _Чтение_) и в поле _Your homepage displays_ (_На главной странице отображать_) выберите чекбокс _static page_ (_Статическую страницу (выберите ниже)_) и в поле _Homepage_ (_Главная страница_) выберите _Homepage_ из выпадающего списка. Нажмите _Сохранить изменения_.
   - Navigate back to the Homepage, where you should see the custom field groups for the homepage and you can add your own content.
   - Вернитесь на Homepage, где вы должны увидеть пользовательские группы полей для главной страницы, и вы можете добавить свой собственный контент.
   - Наконец, перейдите в _GraphQL_> _Settings_ и в поле _GraphQL Endpoint_ скопируйте конечную точку для GraphQL API (например https://example.com/graphql ). Затем перейдите в корневой каталог Gatsby сайта и создайте файл `.env`, в котором пропишите `WPGRAPHQL_URL="https://example.com/graphql"`.

1. **Начните разработку**

    В каталоге вашего сайта запустите сервер разработки:

   ```sh
   yarn start
   ```

   Теперь ваш сайт должен быть запущен по адресу <http://localhost:8000>


1. **Откройте исходный код и начните редактирование**

## Развертывание сайта

Как только ваш контент станет доступен в WordPress, разверните свой сайт в [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

1. Переместите локальный сайт в хранилище на GitHub, GitLab или Bitbucket
1. Войдите в панель управления [Gatsby Cloud Dashboard][] и нажмите на **Add a site**
1. Используйте опцию **Import from a Git repository**, чтобы найти свой сайт
1. Добавьте переменные среды из вашего файла `.env.production` в Gatsby Cloud во время установки
1. Нажмите **Build site**, и должна начаться сборка вашего сайта

Более подробное пошаговое руководство смотрите в руководстве о том, как [создать свой сайт с помощью Gatsby Cloud][tutorial].

[gatsby cloud dashboard]: https://gatsbyjs.com/dashboard
[tutorial]: https://www.gatsbyjs.com/docs/tutorial/part-1/#build-your-site-with-gatsby-cloud

### Развертывание без использования CLI

В качестве альтернативы вы можете развернуть этот стартер непосредственно в Gatsby Cloud.

Обратите внимание, что вам нужно будет настроить свой контент в WordPress вручную.

[![Deploy to Gatsby](https://www.gatsbyjs.com/deploynow.svg "Deploy to Gatsby")](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage-ts)

## Настройка Gatsby Cloud Preview

Чтобы использовать Gatsby Cloud Preview с этим сайтом, см. документацию по
[[Настройке Preview с помощью WPGatsby](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/configuring-wp-gatsby.md#setting-up-preview).

## What's included?

```sh
├── README.md
├── gatsby-config.js
├── gatsby-node.js
├── src
│   ├── components
│   ├── pages
│   ├── colors.css.ts
│   ├── styles.css.ts
│   └── theme.css.ts
└── .env.EXAMPLE
```

1. **`gatsby-config.js`**: [Gatsby config] file that includes plugins required for this starter.
1. **`gatsby-node.js`**: [Gatsby Node] config file that creates an abstract data model for the homepage content.
1. **`src/`**: The source directory for the starter, including pages, components, and [Vanilla Extract][] files for styling.

[gatsby config]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[gatsby node]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
[vanilla extract]: https://vanilla-extract.style/

## Инструкция

### Как изменить цвета темы

Чтобы изменить цвета, используемые в этом стартере, отредактируйте файл `src/colors.css.ts`.

```ts
export const colors = {
  background: "#fff",
  text: "#004ca3",
  primary: "#004ca3",
  muted: "#f5fcff",
  active: "#001d3d",
  black: "#000",
}

```

Если вы хотите добавить дополнительные цвета, добавьте дополнительные поля к этому объекту.
Этот файл импортируется в `src/theme.css.ts` и создает пользовательские свойства CSS, которые могут быть импортированы и использованы в других файлах `.css.ts`.

Файл компонентов UI `src/components/ui.tsx` импортирует стили из файла `src/components/ui.css.ts`. Вы можете увидеть, как используются значения темы и цвета в этом файле.

### Добавление логотипа

![Logo](./docs/images/logo.png)

Логотип SVG находится в React компоненте `src/components/brand-logo.tsx`. Следуя примеру в этом файле, можно вставить свой вариант. Обратите внимание, что атрибуты SVG должны быть записаны для JSX - в верблюжьей нотации.

Использование встроенного в компонент SVG логотипа позволяет подбирать ему цвета, используемые в CSS, именно так цвета логотипа инвертируются для мобильного меню.

Если вы предпочитаете обычное изображение, используйте компонент [`StaticImage`](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#staticimage) из `gatsby-plugin-image` вместо SVG в этом файле.

### Настройка заголовков, кнопок и других стилей

![Headings & Buttons](./docs/images/headings-buttons.png)

Чтобы дополнительно настроить внешний вид домашней страницы, отредактируйте UI компоненты в `src/components/ui.tsx` и стили в `src/components/ui.css.ts`.

### Настройка компонентов раздела

Чтобы настроить любой раздел домашней страницы, отредактируйте соответствующий компонент в `src/components`. Большинство стилей для этих компонентов обрабатываются с помощью общих UI компонентов в `src/components/ui.tsx`.

### Создание раздела пользовательских компонентов

Чтобы создать новый тип раздела на домашней странице, вам потребуется создать новый компонент раздела, используя существующие компоненты в качестве примера. Для этого примера мы создадим новый компонент "About".

1. Сначала, для поддержки нового компонента создайте свои пользовательские поля в WordPress, для этого сделайте следующее:

    - На вкладке _Группы полей_ выберите страницу Homepage и создайте новую группу полей с помощью кнопки _+ Add Field_
    - В поле _Тип поля_ выберите _Группа_
    - В поле _Ярлык поля_ введите _About_
    - В поле _Имя поля_ введите _about_
    - В секции _Вложенные поля_ нажмите кнопку _+ Add Field_
    - В поле _Тип поля_ выберите _Текст_
    - В поле _Ярлык поля_ введите _Heading_
    - В поле _Имя поля_ введите _heading_
    - Добавьте еще одно поле с помощью кнопки _+ Add Field_ секции _Вложенные поля_
    - В поле _Тип поля_ выберите _Текст_
    - В поле _Ярлык поля_ введите _Text_
    - В поле _Имя поля_ введите _text_
    - Во вкладке _Location Rules_ секции Настройки для _Тип записи_ обязательно укажите _равно_ и _Страница_, а для _Тип страницы_ укажите _равно_ и _Главная страница_
    - Также убедитесь, что для этой группы включена опция _Show in GraphQL_.
    - В правом верхнем углу нажмите кнопку _Save Changes_.
    - Перейдите на вкладку _Страницы_, выберите страницу _Homepage_. В самом низу в секции _About_ отредактируйте два поля _Heading_ и _Text_.
    - В правом верхнем углу нажмите кнопку _Обновить_

2. Отредактируйте `gatsby-node.js`

    - Отредактируйте файл `gatsby-node.js` сайта, добавив тип `HomepageAbout`, который соответствует вашим пользовательским полям в WordPress. Это позволяет домашней странице запрашивать абстрактный тип `HomepageAbout`.

```js
// in gatsby-node.js
exports.createSchemaCustomization = async ({ actions }) => {
// blocks
// ...
actions.createTypes(/* GraphQL */`
  type HomepageAbout implements Node & HomepageBlock {
    id: ID!
    blocktype: String
    heading: String
    text: String
  }
`)
// ...
}
// ...
exports.onCreateNode = ({ actions, node, createNodeId, createContentDigest }) => {
}
  // ...
  switch (node.internal.type) {
    case "WpPage":
      if (node.slug !== "homepage") return
      const {
        homepageHero,
        homepageCta,
        statList,
        testimonialList,
        productList,
        logoList,
        featureList,
        benefitList,
        // добавьте новую пользовательскую группу полей здесь
        about,
      } = node

      // create a new node for this field group
      about: {
        id: createNodeId(`${node.id} >>> HomepageAbout`),
        ...about,
      },

      actions.createNode({
        ...blocks.about,
        blocktype: "HomepageAbout",
        internal: {
          type: "HomepageAbout",
          contentDigest: node.internal.contentDigest,
        },
      })

      /*
      actions.createNode({
        id: bannerID,
        internal: {
          type: "HomepageBanner",
          contentDigest: createContentDigest(JSON.stringify(homepageBanner)),
        },
        parent: node.id,
        blocktype: "HomepageBanner",
        heading: homepageBanner.bannerHeading,
        text: homepageBanner.bannerText,
      })
      */

      // ...
      actions.createNode({
        ...node.homepage,
        id: createNodeId(`${node.id} >>> Homepage`),
        internal: {
          type: "Homepage",
          contentDigest: node.internal.contentDigest,
        },
        parent: node.id,
        blocktype: "Homepage",
        image: node.featuredImageId,
        // Массив content влияет на порядок расположения блоков на странице
        content: [
          heroID,
          logosID,
          // добавьте содержимое вашего баннера в том месте, в котором вы хотели бы, чтобы оно отображалось на странице
          aboutID,
          productsID,
          featuresID,
          benefitsID,
          statsID,
          testimonialsID,
          ctaID,
        ],
      })
      // ...
  }
}
```

3. Затем, создайте компонент About:

```jsx fileExt
// src/components/banner.tsx
import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"



export default function About(props) {
  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    text
  }
`
```

4. Экспортируйте компонент из `src/components/sections.tsx`

   ```js fileExt
   // src/components/sections.tsx
   export { default as HomepageHero } from "./hero"
   export { default as HomepageFeature } from "./feature"
   export { default as HomepageFeatureList } from "./feature-list"
   export { default as HomepageLogoList } from "./logo-list"
   export { default as HomepageBenefitList } from "./benefit-list"
   export { default as HomepageTestimonialList } from "./testimonial-list"
   export { default as HomepageStatList } from "./stat-list"
   export { default as HomepageCta } from "./cta"
   export { default as HomepageProductList } from "./product-list"

   // add export for new component
   export { default as HomepageAbout } from "./about"
   ```

5. Add the GraphQL query fragment to the query in `src/pages/index.tsx`

   ```js fileExt
   // in src/pages/index.tsx
   export const query = graphql`
     {
       homepage {
         id
         title
         description
         image {
           id
           url
         }
         blocks: content {
           id
           blocktype
           ...HomepageHeroContent
           ...HomepageFeatureContent
           ...HomepageFeatureListContent
           ...HomepageCtaContent
           ...HomepageLogoListContent
           ...HomepageTestimonialListContent
           ...HomepageBenefitListContent
           ...HomepageStatListContent
           ...HomepageProductListContent
           # New component fragment
           ...HomepageAboutContent
         }
       }
     }
   `
   ```

## Устранение неполадок

### Ошибки после внесения изменений в схему

Если вы внесли изменения в файл `gatsby-node.js` или внесли изменения в модель данных WordPress, то очистите кэш Gatsby перед запуском сервера разработки:

```sh
yarn clean && yarn start
```

---

## Иконки

В этом проекте применяются SVG иконки из пакета [react-feather](https://www.npmjs.com/package/react-feather). Иконки и их названия можно посмотреть [здесь](https://feathericons.com/)

## Используемые пакеты

- `gatsby-source-filesystem` плагин создаёт узлы (nodes) из файлов. Эти файлы будут доступны через запросы graphql.

- `gatsby-plugin-image` плагин создаёт изображения в различных размерах и форматах

Для получения полной документации по всем параметрам конфигурации см. Справочное руководство Gatsby Image Plugin

- `gatsby-plugin-sharp` поддерживает соединения между плагинами [Sharp](https://github.com/lovell/sharp) и Gatsby

- `gatsby-transformer-sharp` позволяет более просто создавать несколько изображений нужных размеров и разрешений с помощью одного запроса

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).**

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.
