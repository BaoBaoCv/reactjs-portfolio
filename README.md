# CV-React-Vipro

-   Làm background () (DKB)
-   Homepage screen
    -   Header (DKB)
    -   Overview
        -   Name card (DKB)
        -   Brief info card (DKB)
        -   Statement card (DKB)
        -   Hình card (DKB)
        -   Social Media (DKB)
    -   Timeline
        -   Timeline title () (PGB)
        -   Timeline bar (Time[], height)(PGB)
        -   Project info card (PGB)
            -   Tag
            -   Project Name card
            -   Statement card
            -   Arrow
    -   Footer
-   Detail screen
    -   Info về nghề nghiệp
        -   Meta data info
    -   Detail info
        -   image card
            -   gird column (-2 3 col)
        -   detail card
            -   title
            -   detail (column
        -   Brief info card ()

# Folder structure

### files named "index.\*" used to export all other files in that same folder

-   /src
    -   /assets
        -   /images: all images are stored here
        -   /styles
            -   \_\_mixins.scss: all resused styles stored here
            -   \_\_variable.scss: all styling variables stored here
    -   /configs: stores all high level config for application
        -   routes: stores routes for setting up router
    -   /constants: store all constants for app (rarely use)
    -   /mock: store mock data for project
    -   /components
        -   /commons
        -   /pages
            -   /home
            -   /profile
            -   /project-list

# Naming convention

## Tên file

-   tên folder: viết thường cách bằng dấu cách (vd: project-list)
-   tên component: camelCase viết in chữ đầu
-   tên scss: như tên folder

## Tên variable

-   tên scss variable: như tên folder
-   tên js variable: camelCase như Java

## Tên class css

-   ví dụ: "home**intro-title" or "home-page**intro-title-name"

## Tên data trong src/mock/userData.js

-   đặt tên theo \[componentDeatail\] (component là cái component sử dụng nó deatail là cái tên m muốn đặt gì cũng đc)
    vd(timelineProjects)
