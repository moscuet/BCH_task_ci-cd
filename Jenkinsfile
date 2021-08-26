pipeline {
agent any
 stages {
stage("build") {
steps {
echo 'building our app...'
 npm run build
}
}
 stage("test") {
steps {
echo 'testing our app...'
}
}
 stage("deploy") {
steps {
echo 'deploying our app...'
}
}
 }
}
