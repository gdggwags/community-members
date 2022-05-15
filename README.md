# community-members

This project aims to simplify and guide community members to make their first contribution.
Follow the steps below to make your contribution

# Guidelines

If you don't have git on your computer system, use this link <https://help.github.com/articles/set-up-git/> to install it.

# Fork this Repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your github account.

# Clone Repository

Now clone the forked repository to your computer system. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Next, open a terminal and run the following git command:
```git clone "url you just copied"```

example: ```git clone https://github.com/gdggwags/community-members.git```

Note: Your github username should be where you see `gdggwags`
Here you're copying the contents of the `community-members` repository on GitHub to your computer.

## Create a Branch

Open cloned project in a text editor eg. `VSCODE`

Now, checkout to the `dev` branch using the `git checkout` command

```git checkout dev```

then create a branch from the dev branch using the `git checkout` command

```git checkout -b branch-name```

Example: ```git checkout -b feature-allena-membership```

## Make necessary changes to the project and commit those changes

To add your membership profile, the only file you'll be modifying is the `data.json` file.

Open the data.json file in your text editor and under `members`, add an extra object containing your details using the format below
NB: *Remember to add a comma `,` after the last object before adding yours*

```json
 {
    "name": "Your Full Name",
    "title": "Student",
    "about":"Python",
    "avatar": "images/avatars/your-picture.png",
    "social": {
        "facebook": "https://www.facebook.com/your-username",
        "twitter": "https://twitter.com/your-username",
        "github": "https://github.com/your-username",
        "linkedin": "https://linkedin.com/in/your-username"
    }
}
```

NB: Your avatar can be a link to your photo store on drive or you can add it to the `images folder` and fill the relative path in the `avatar` section

Have cool features you want to add to the project? Feel free to do so. We can't wait to see the awesome ideas you have in mind.

... and that's all for this section

## Commit your changes

After you make a set of changes, use git add -A to stage your changes and git commit -m "DESCRIPTION OF CHANGES" to commit them.

Example: `git commit -m "add membership profile for allison"` can be used a sample commit

If you are making multiple sets of changes, it's a good practice to make a commit after each set.

## Push your changes to your fork

When you are done making all of your changes, upload these changes to your fork using `git push origin BRANCH_NAME`.
This "pushes" your changes to the "BRANCH_NAME" branch of the "origin" (which is your fork on GitHub).

Example: `git push origin feature-allena-membership`

## Begin the pull request

Return to your fork on GitHub, and refresh the page. You may see a highlighted area that displays your recently pushed branch.
Click the green `Compare & pull request` button to begin the pull request.

(Alternatively, if you don't see this highlighted area, you can switch to your branch using the Branch button and then click the New pull request button.)

## Create the pull request

Before submitting the pull request, you first need to describe the changes you made (rather than asking the project maintainers to figure them out on their own). You should write a descriptive title for your pull request, and then include more details in the body of the pull request. If there are any related GitHub issues, make sure to mention those by number. The body can include Markdown formatting, and you can click the Preview tab to see how it will look.

Below the pull request form, you will see a list of the commits you made in your branch, as well as the "diffs" for all of the files you changed.

If everything looks good, click the green `Create pull request` button!

## Review the pull request

Now that you've created a pull request, which is stored in the project's repository (not in your fork of the repository). It's a good idea to read through what you wrote, as well as clicking on the Commits tab and the Files changed tab to review the contents of your pull request.

You can add more commits to the pull request by simply making changes to your code, commit the changes and pushing the changes to your fork.

Once your pull request is reviewed and merged, you will see your profile in the website. <https://gdggwags.github.io/community-members/>

# CONGRATULATIONS

You've just contributed to a public project.

Need help? Reach out to us via mail gdggwagwalada@gmail.com
