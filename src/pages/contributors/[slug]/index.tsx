import ContributorHeading from "~/components/atoms/contributor-heading/index";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import styles from "./styles.module.css";
import { contributors } from "~/data";
import { encodeHtml } from "~/libs/encodeHtml";
import { convertTextToHtml } from "~/libs/convertTextToHtml";

function ContributorPage() {
  const {
    query: { slug },
  } = useRouter();

  const contributor = contributors.find((c) => c.slug === slug);

  if (!contributor) return <ErrorPage statusCode={404} />;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributorHeading>{contributor.name}</ContributorHeading>
          <p
            dangerouslySetInnerHTML={encodeHtml(
              convertTextToHtml(contributor?.description)
            )}
          />
          <ul>
            {(contributor.links ?? []).map((link) => (
              <li key={link.url}>
                <a target="_blank" rel="noreferer noreferrer" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {contributor?.additionalSection && (
            <>{contributor.additionalSection}</>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContributorPage;
