  


     Component <= <Base cx=...> <=| Container
                                  | Flex             <=| FlexList       <=| ButtonList
                                  | Box              <=| Section          | LinkList
                                  | List
                                  | Space
                                  | Nudge
                                  | Text             <=| SuperHeading
                                  | Blockquote         | Heading
                                  | NavButtonLink      | Subhead
                                  | Button             | Kicker
                                  | CTALink
                                  | NavLink          <=| IconLink
                                  | InteractiveIcon
                                  | VisuallyHidden
                                  
                                  
                                  | GatsbyImage   <=| Avatar
                                                    | Logo
                                                    | Icon
                                   
          <a /> || GatsbyLink   <=| Link    <=| BlockLink
                                                    


styles.flexVariants[variant] //"wrap"|"start"|"baseline"|"columnStart"|"column"|"end"|"stretch"|"spaceBetween"|"center"|"responsive"
      .containers[width] //"normal" | "tight" | "wide" | "narrow" | "fullbleed"
      .margin[size]
      .gutter[gutter]   //1 | 2 | 3 | 4 | 5 | 6
      .marginY[marginY] //1 | 2 | 3 | 4 | 5 | 6
      .flexGap[gap]     //1 | 2 | 3 | 4 | 5 | 6